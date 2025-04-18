import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkNine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="nine"><path id="Vector" d="M10 17H11.25C13.3211 17 15 15.3211 15 13.25V10.125M15 10.125C15 8.39911 13.6009 7 11.875 7C10.1491 7 8.75 8.39911 8.75 10.125C8.75 11.8509 10.1491 12.625 11.875 12.625C13.6009 12.625 15 11.8509 15 10.125Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkNine);
export default ForwardRef;