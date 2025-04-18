import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkWine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="wine"><path id="Vector" d="M8.4 21H15.6M12 21V14.25M11.25 14.25H12.75C15.5114 14.25 17.75 12.0114 17.75 9.25V3.5C17.75 3.22386 17.5261 3 17.25 3H6.75C6.47386 3 6.25 3.22386 6.25 3.5V9.25C6.25 12.0114 8.48858 14.25 11.25 14.25Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkWine);
export default ForwardRef;