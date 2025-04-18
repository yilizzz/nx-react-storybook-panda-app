import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkFile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="file"><path id="Vector" d="M9.72796 3H7.5C6.25736 3 5.25 4.00736 5.25 5.25V18.75C5.25 19.9926 6.25736 21 7.5 21H16.5C17.7426 21 18.75 19.9926 18.75 18.75V12M9.72796 3C10.9706 3 12 4.00736 12 5.25V7.5C12 8.74264 13.0074 9.75 14.25 9.75H16.5C17.7426 9.75 18.75 10.7574 18.75 12M9.72796 3C13.4179 3 18.75 8.3597 18.75 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkFile);
export default ForwardRef;