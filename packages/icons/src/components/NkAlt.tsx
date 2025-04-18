import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkAlt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="alt"><path id="Vector" d="M3 5.25H8.625L15.375 18.75H21M14.25 5.25H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkAlt);
export default ForwardRef;