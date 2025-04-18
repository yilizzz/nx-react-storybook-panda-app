import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkEight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="eight"><path id="Vector" d="M11.875 12C11.875 12 15 12.625 15 14.5C15 16.375 13.6009 17 11.875 17C10.1491 17 8.75 16.375 8.75 14.5C8.75 12.625 11.875 12 11.875 12ZM11.875 12C11.875 12 15 11.375 15 9.5C15 7.625 13.6009 7 11.875 7C10.1491 7 8.75 7.625 8.75 9.5C8.75 11.375 11.875 12 11.875 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkEight);
export default ForwardRef;