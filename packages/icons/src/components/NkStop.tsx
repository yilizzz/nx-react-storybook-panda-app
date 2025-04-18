import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkStop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="stop"><path id="Vector" d="M6 12.5C6 9.67157 6 8.25736 6.87868 7.37868C7.75736 6.5 9.17157 6.5 12 6.5C14.8284 6.5 16.2426 6.5 17.1213 7.37868C18 8.25736 18 9.67157 18 12.5C18 15.3284 18 16.7426 17.1213 17.6213C16.2426 18.5 14.8284 18.5 12 18.5C9.17157 18.5 7.75736 18.5 6.87868 17.6213C6 16.7426 6 15.3284 6 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkStop);
export default ForwardRef;