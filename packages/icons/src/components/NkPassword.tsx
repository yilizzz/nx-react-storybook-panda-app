import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkPassword = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="password"><path id="Vector" d="M13.5 9L10.5 15M10.5 9L13.5 15M9.75 12H14.25M6.75 9.00006L3.75 15.0001M3.75 9.00006L6.75 15.0001M3 12.0001H7.5M20.25 9.00006L17.25 15.0001M17.25 9.00006L20.25 15.0001M16.5 12.0001H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkPassword);
export default ForwardRef;