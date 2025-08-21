type TStatus = 'processing' | 'processed';

interface IHeaderCredentials {
	voiceflow_api_key: string;
	voiceflow_project_id: string;
	voiceflow_version_id: string;
}

interface IObjectInconcertState {
	status: TStatus;
	message: Array<string>;
	credentials?: IHeaderCredentials;
	callControlURL?: string;
}

export const voiceflowStates = new Map<string, IObjectInconcertState>();
