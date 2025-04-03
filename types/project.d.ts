interface Project {
	id: string;
	title: string;
	description: string;
	doc?: boolean;
	techno: string;
	imp: Array<{
		icon: string;
		link: string;
	}>;
	techI: Array<string>;
	video?: string;
}