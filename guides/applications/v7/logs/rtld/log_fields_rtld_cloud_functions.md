---
title: Log Fields (RTLD Cloud Functions)
---

Log data is reported as a JSON document. Log format determines whether log data identification information will be included and how the data is formatted. Each type of log format is described below.

-   **JSON:** This format includes:

    -   Top-level name/value pairs that uniquely identify the set of log entries reported in the JSON document.
    -   An object for each log entry associated with the current JSON document.

    [View a sample log file.](#json)

-   **JSON Array:** This format generates a JSON document that contains an [array of objects](#logs-array). Each object is a log entry associated with the current JSON document.

    [View a sample log file.](#json-array)

-   **JSON Lines:** This format generates an invalid JSON document that contains an object on each line. Each object is a log entry associated with the current JSON document. This object is an exact match for an object contained by the [Logs array](#logs-array).

    [View a sample log file.](#json-lines)

-   **CSV:** This format generates a comma-separated value (CSV) document with the following format:

    -   **First Line:** Identifies the set of log fields that will be reported for each log entry and the order in which data for these fields will be reported. View log field definitions within the [Logs Array](#logs-array) section.
    -   **Subsequent Lines:** Each subsequent line contains a log entry. Each log entry contains comma-separated values for the log fields identified in the first line.

    <Callout type="important">

      Adding or removing log fields may alter the order in which they are reported within a CSV document. It is important to rely on the CSV's first line to identify the set of log fields that are reported for each log entry and the order in which data for those fields will be provided.

    </Callout>

    [View a sample log file.](#csv)

<Callout type="important">

  If log data uses either the CSV, JSON Array, or JSON Lines log format, then it will not contain information that uniquely identifies a set of log data. If log data using one of these formats is delivered to a destination other than AWS S3, Azure Blob Storage, or Google Cloud Storage, then there is no way to check for gaps in sequence numbers when attempting to [identify missing log data](/applications/logs/rtld/log_data_verification#checking-for-sequence-number-gaps).

</Callout>

<Callout type="info">

  A log entry describes a HTTP/HTTPS request that was submitted to our CDN.

</Callout>

## Top-Level Name/Value Pairs {/*top-level-namevalue-pairs*/}

<Callout type="info">

  Top-level name/value pairs are unavailable for the CSV, JSON Array, and JSON Lines log formats. If you require this information, please choose the standard JSON log format.

</Callout>

Top-level name/value pairs are described below.

-   **account_number (*String*):** Customer AN. Identifies an environment by its legacy system-defined ID.
-   **agent_id (*String*):** Agent ID. Indicates the unique ID that identifies the Real-Time Log Delivery software agent that generated the log data.
-   **datestamp (*String*):** Date Stamp. Indicates the date on which the log data was generated.

    **Syntax:** `YYYYMMDD`

    **Example:** `20230412`

-   **logs (*Array of objects*):** Log Data. [Describes the log entries](#logs-array) associated with the current JSON document. Each object contains a set of fields that describe the request/response for a single log entry.
-   **profile_id (*Integer*):** Profile ID. Identifies a RTLD profile by its system-defined ID.
-   **seq_num (*Integer*):** Sequence Number. Indicates the sequential number that identifies the order in which the log data was generated by the software agent identified by the `agent_id` field.
-   **service (*String*):** Service. Returns `serverless`.


### logs Array {/*logs-array*/}

The `logs` array contains an object for each log entry associated with the current JSON document. Each log entry describes each request processed by Cloud Functions, including {{ PRODUCT }} {{ PRODUCT_PLATFORM }} requests, through the following fields:

-   **client_ip (*String*):** Client IP. (Category: Client Network) Indicates the IP address for the device that submitted the request.
-   **compute_instance (*String*):** Compute instance. (Category: Function) Identifies a compute instance by its system-defined ID. <a id="log-level" />
-   **deployment_version (*String*):** Edgio deployment version. (Category: Deployment) Identifies a deployment by its version number.
-   **dri_data (*String*):** DRI data. (Category: Application) Describes the request logged by Deep Request Inspection through the following fields:

        -   **bodyLength:** Indicates the length of the payload.
        -   **bodyTruncated:** Indicates whether the payload was truncated.
        -   **duration:** Indicates the total length of time, in milliseconds, for an upstream request. This metric measures the duration between when a request is submitted from the {{ PRODUCT }} cloud and a response is received from an origin server.
        -   **headers:** Contains request headers.
        -   **host:** Indicates the request's host.
        -   **method:** Indicates the request's HTTP method (e.g., `GET`, `HEAD`, and `POST`).
        -   **path:** Indicates the URL path for the content that was requested, posted, or deleted. This URL, which excludes the query string, is reported as a relative path that starts directly after the hostname.
        -   **protocol:** Indicates the request's scheme. Valid values are:

            `http: | https:`
        -   **statusCode:** Indicates the HTTP status code for the response.
        -   **statusMessage:** Indicates the HTTP status message for the response.

-   **environment_id (*String*):** Environment ID. (Category: Deployment) Indicates the system-defined ID for the environment through which this request was served.
-   **function_id (*String*):** Function ID. (Category: Function) Indicates the function's ID.
-   **level (*String*):** Log Level. (Category: Application) Indicates either the severity of the console message or log data type. Valid values are:

    -   **10:** Trace. This severity is indicative of detailed application logging or log data generated by an external library used by your application.
    -   **20:** Debug. This severity contains more detailed information than Info console messages.
    -   **30:** Info. This severity indicates information describing normal operation within your application.
    -   **40:** Warn. This severity typically indicates an issue that should be investigated as time allows.
    -   **50:** Error. This severity typically indicates that the request was unsuccessful. Errors require investigation and remediation to ensure optimal performance for all users.
    -   **60:** Fatal. This severity, which requires immediate attention, typically indicates that your application will stop or become unusable soon.
    -   **100:** Deep Request Inspection - Downstream request information.
    -   **101:** Deep Request Inspection - Downstream response information.
    -   **102:** Deep Request Inspection - Upstream request information.
    -   **103:** Deep Request Inspection - Upstream response information.
    -   **104:** Deep Request Inspection - Upstream response body information.

-   **message (*String*):** Log message. (Category: Application) Contains a console message triggered by the request.
-   **organization_id (*String*):** Organization ID. (Category: Deployment) Indicates an organization's system-defined ID. This organization owns the property associated with this request.
-   **region (*String*):** Region. (Category: Function) Indicates the AWS region where the request was processed.
-   **request_id (*String*):** Request ID. (Category: Request) Indicates the unique ID assigned to the request.
-   **rtld_profile_name (*String*):** RTLD Profile Name. (Category: General) Indicates the name of the RTLD profile.
-   **source (*String*):** Source. (Category: Application) Indicates whether the source of the log message is due to the application or Deep Request Inspection (DRI). Valid values are:

    `APPLICATION | DRI`

-   **stack_trace (*String*):** Stack trace. (Category: Application) Contains the stack trace triggered by the request.
-   **timestamp (*Decimal*):** Timestamp. (Category: Request) Indicates the Unix time, in seconds, at which the request was submitted.

    **Syntax:** `<SECONDS>.<MICROSECONDS>`

## Sample Log Data {/*sample-log-data*/}

Sample log data that contains two log entries is provided below for all four log formats.

<a id="json" />

```JSON
{
    "agent_id": "1EEE0000727EEB65",
    "seq_num": 0,
    "service": "serverless",
    "account_number": "0001",
    "profile_id": 2,
    "datestamp": "20240311",
    "logs": [{
            "timestamp": 1710186605.046000000,
            "client_ip": "192.0.2.141",
            "function_id": "ac3f16",
            "request_id": "08b7d67a-2022-4cf4-9604-03740face332",
            "region": "us-west-1",
            "level": 100,
            "compute_instance": "53331000-d0ca-48b6-a09c-afde4ccc41be",
            "stack_trace": "",
            "organization_id": "cc14e5b2-0d65-49c8-ad82-f602b9b29cca",
            "environment_id": "c26fe99f-7897-4b8c-894c-5954955c7c88",
            "deployment_version": 10,
            "message": "",
            "source": "DRI",
            "dri_data": {
                "method": "GET",
                "path": "/api/upstream-double",
                "host": "prod-nextjs-v7-default.glb.edgio.link",
                "headers": {
                    "x-forwarded-for": "192.0.2.141, 192.0.2.36",
                    "x-forwarded-proto": "https",
                    "x-forwarded-port": "443",
                    "host": "prod-nextjs-v7-default.glb.edgio.link",
                    "x-amzn-trace-id": "Root=1-62ef606d-63351bd52c0ec1e66d14ca8d",
                    "user-agent": "curl/8.1.2",
                    "accept": "*/*",
                    "x-host": "prod-nextjs-v7-default.glb.edgio.link",
                    "x-cloud-functions-hint": "proxy:0",
                    "x-edg-version": "9 10 8 7.9.0 2024-03-11T12:29:03Z 6d6830d9-56d3-49b8-8319-f7821af7d857",
                    "x-request-id": "08b7d67a-2022-4cf4-9604-03740face332"
                },
                "protocol": "https:"
            }
        }, {
            "timestamp": 1710186662.553000000,
            "client_ip": "192.0.2.141",
            "function_id": "ac3f16",
            "request_id": "8ecbe38d-6815-427d-b28f-0043ff23fa2e",
            "region": "us-west-1",
            "level": 100,
            "compute_instance": "53331000-d0ca-48b6-a09c-afde4ccc41be",
            "stack_trace": "",
            "organization_id": "cc14e5b2-0d65-49c8-ad82-f602b9b29cca",
            "environment_id": "c26fe99f-7897-4b8c-894c-5954955c7c88",
            "deployment_version": 10,
            "message": "",
            "source": "DRI",
            "dri_data": {
                "method": "GET",
                "path": "/api/upstream-double",
                "host": "prod-nextjs-v7-default.glb.edgio.link",
                "headers": {
                    "x-forwarded-for": "192.0.2.141, 192.0.2.36",
                    "x-forwarded-proto": "https",
                    "x-forwarded-port": "443",
                    "host": "prod-nextjs-v7-default.glb.edgio.link",
                    "x-amzn-trace-id": "Root=1-62ef60a6-041fb9871f54061011d68c00",
                    "user-agent": "curl/8.1.2",
                    "accept": "*/*",
                    "x-host": "prod-nextjs-v7-default.glb.edgio.link",
                    "x-cloud-functions-hint": "proxy:0",
                    "x-edg-version": "9 10 8 7.9.0 2024-03-11T12:29:03Z 6d6830d9-56d3-49b8-8319-f7821af7d857",
                    "x-request-id": "8ecbe38d-6815-427d-b28f-0043ff23fa2e"
                },
                "protocol": "https:"
            }
        }
    ]
}
```

<a id="json-array" />

```JSON_Array
[{
        "timestamp": 1710186605.046000000,
        "client_ip": "192.0.2.141",
        "function_id": "ac3f16",
        "request_id": "08b7d67a-2022-4cf4-9604-03740face332",
        "region": "us-west-1",
        "level": 100,
        "compute_instance": "53331000-d0ca-48b6-a09c-afde4ccc41be",
        "stack_trace": "",
        "organization_id": "cc14e5b2-0d65-49c8-ad82-f602b9b29cca",
        "environment_id": "c26fe99f-7897-4b8c-894c-5954955c7c88",
        "deployment_version": 10,
        "message": "",
        "source": "DRI",
        "dri_data": {
            "method": "GET",
            "path": "/api/upstream-double",
            "host": "prod-nextjs-v7-default.glb.edgio.link",
            "headers": {
                "x-forwarded-for": "192.0.2.141, 192.0.2.36",
                "x-forwarded-proto": "https",
                "x-forwarded-port": "443",
                "host": "prod-nextjs-v7-default.glb.edgio.link",
                "x-amzn-trace-id": "Root=1-62ef606d-63351bd52c0ec1e66d14ca8d",
                "user-agent": "curl/8.1.2",
                "accept": "*/*",
                "x-host": "prod-nextjs-v7-default.glb.edgio.link",
                "x-cloud-functions-hint": "proxy:0",
                "x-edg-version": "9 10 8 7.9.0 2024-03-11T12:29:03Z 6d6830d9-56d3-49b8-8319-f7821af7d857",
                "x-request-id": "08b7d67a-2022-4cf4-9604-03740face332"
            },
            "protocol": "https:"
        }
    }, {
        "timestamp": 1710186662.553000000,
        "client_ip": "192.0.2.141",
        "function_id": "ac3f16",
        "request_id": "8ecbe38d-6815-427d-b28f-0043ff23fa2e",
        "region": "us-west-1",
        "level": 100,
        "compute_instance": "53331000-d0ca-48b6-a09c-afde4ccc41be",
        "stack_trace": "",
        "organization_id": "cc14e5b2-0d65-49c8-ad82-f602b9b29cca",
        "environment_id": "c26fe99f-7897-4b8c-894c-5954955c7c88",
        "deployment_version": 10,
        "message": "",
        "source": "DRI",
        "dri_data": {
            "method": "GET",
            "path": "/api/upstream-double",
            "host": "prod-nextjs-v7-default.glb.edgio.link",
            "headers": {
                "x-forwarded-for": "192.0.2.141, 192.0.2.36",
                "x-forwarded-proto": "https",
                "x-forwarded-port": "443",
                "host": "prod-nextjs-v7-default.glb.edgio.link",
                "x-amzn-trace-id": "Root=1-62ef60a6-041fb9871f54061011d68c00",
                "user-agent": "curl/8.1.2",
                "accept": "*/*",
                "x-host": "prod-nextjs-v7-default.glb.edgio.link",
                "x-cloud-functions-hint": "proxy:0",
                "x-edg-version": "9 10 8 7.9.0 2024-03-11T12:29:03Z 6d6830d9-56d3-49b8-8319-f7821af7d857",
                "x-request-id": "8ecbe38d-6815-427d-b28f-0043ff23fa2e"
            },
            "protocol": "https:"
        }
    }
]
```

<a id="json-lines" />

```JSON_Lines
{"timestamp": 1710186605.046000000, ...}
{"timestamp": 1710186662.553000000, ...}
```

<a id="csv" />

```CSV
timestamp,function_id,region,...,source
1710186605.046000000,"ac3f16","us-west-1",..,"DRI"
1710186662.553000000,"ac3f16","us-west-1",..,"DRI"
```
