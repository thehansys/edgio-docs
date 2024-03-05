import {useRouter} from 'next/router';

import {productsConfig} from 'config/appConfig';
import {useAppContext} from 'contexts/AppContext';

const latestVersion = process.env.NEXT_PUBLIC_LATEST_VERSION as string;
interface RouterQuery {
  version?: string | string[];
  [key: string]: any;
}

interface IVersion {
  /**
   * The version that is currently selected, e.g. "7"
   */
  selectedVersion: string;

  /**
   * The version that is currently selected prefixed with "v", e.g. "v7"
   */
  selectedVersionText: string;

  /**
   * The latest version, e.g. "7"
   */
  latestVersion: string;

  /**
   * The latest version prefixed with "v", e.g. "v7"
   */
  latestVersionText: string;

  /**
   * Whether the selected version is the latest version
   */
  isLatest: boolean;

  pathPrefix: string;
  packageVersion: string;
  toVersionedPath: (path: string) => string;
  isVersion: (version: string | number) => boolean;
}

function useConditioning() {
  const router = useRouter();
  const {context} = useAppContext();
  const {slug, version: paramVersion} = router.query as RouterQuery;

  // `slug` is defined from the `src/pages/[...slug].tsx` route, or it could be
  // `version` if coming in from a different route, such as changelog
  let version = slug || paramVersion || [];
  if (Array.isArray(version)) {
    version = version[0];
  }

  // clean version from query
  const cleanedVersion =
    version && typeof version === 'string' && version.match(/^v\d+$/)
      ? version.replace(/v/, '')
      : latestVersion;

  const isLatest = cleanedVersion === latestVersion;
  const versionConfig: IVersion = {
    selectedVersion: cleanedVersion,
    selectedVersionText: `v${cleanedVersion}`,
    latestVersion: latestVersion,
    latestVersionText: `v${latestVersion}`,
    isLatest,
    // doesn't include version in the path for the latest guides
    // pathPrefix: !isLatest ? `v${cleanedVersion}` : '',

    // does include version in the path for the latest guides
    pathPrefix: `v${cleanedVersion}`,

    packageVersion: `^${cleanedVersion}.0.0`,
    toVersionedPath: (path: string): string => {
      const pathPrefix = productsConfig['applications'].pathPrefix;
      const escapedPrefix = pathPrefix.replace(
        /[-\/\\^$*+?.()|[\]{}]/g,
        '\\$&'
      );

      const versionedPaths: Array<[RegExp, () => string]> = [
        // matches anything starting with http, https, mailto, or tel, and returns the path as-is
        [/^(https?:\/\/|mailto:|tel:)/, () => path],
        [
          // matches anything starting with /docs
          /^\/docs/,
          () =>
            [
              '/docs', // forcing all urls to start with /docs
              `${versionConfig.pathPrefix}.x`,
              ...path
                .replace('/docs/', '/')
                .replace(`/${versionConfig.pathPrefix}/`, '/')
                .split('/'),
            ]
              .filter(Boolean)
              .join('/'),
        ],
        [
          // matches anything starting with the path prefix (or legacy /guides or a guide name w/o the preceding /)
          new RegExp(`^(${escapedPrefix}|/guides|\\w+)`),
          () =>
            [
              pathPrefix, // forcing all urls to start with the prefix
              versionConfig.pathPrefix,
              ...path
                .replace('/guides/', '/') //legacy
                .replace(pathPrefix, '/')
                .replace(`/${versionConfig.pathPrefix}/`, '/')
                .split('/'),
            ]
              .filter(Boolean)
              .join('/'),
        ],
      ];

      for (const [regex, fn] of versionedPaths) {
        if (path.match(regex)) {
          return fn();
        }
      }

      return path;
    },

    isVersion: (version: string | number) => {
      return cleanedVersion === version.toString();
    },
  };

  return {version: versionConfig};
}

export default useConditioning;
