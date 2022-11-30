import type { ReactNode } from 'react';

export type Params = {
	[key: string]: string;
};
export type SearchParams = Params;

export interface SegmentProps<P extends Params | unknown = unknown> {
	params: P;
}

export interface LayoutProps<P extends Params = Params>
	extends SegmentProps<P> {
	children: ReactNode;
}

export interface PageProps<
	P extends Params = Params,
	SP extends SearchParams = SearchParams
> extends SegmentProps<P> {
	searchParams?: SP;
}

export interface NextErrorProps {
	error: Error;
	reset(): void;
}

export type NextHeadProps<P extends Params = Params> = SegmentProps<P>;
