export enum ReleaseChannel {
	latest = "latest",
	latestBeta = "latest-beta",
}

// Fields are optional since this is untrusted JSON parsed from a remote response
// that may be unreachable or return an unexpected shape.
export interface VersionResponse {
	CLI2?: {
		release?: { version?: string };
		beta?: { version?: string };
	};
}

// As above, results is optional since the Docker Hub response is untrusted JSON.
export interface DockerHubTagsResponse {
	results?: { name: string }[];
}
