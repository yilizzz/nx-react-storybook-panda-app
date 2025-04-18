import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkEuro = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="euro"><path id="Vector" d="M14 10H7.1192M7.1192 10H4M7.1192 10C7.67008 5.74573 10.1303 4 14.5 4C16.918 4 18.7513 4.53456 20 5.73295M7.1192 10C7.03973 10.6137 7 11.2796 7 12C7 12.7204 7.03973 13.3863 7.1192 14M14 14H7.1192M7.1192 14H4M7.1192 14C7.67008 18.2543 10.1303 20 14.5 20C16.918 20 18.7513 19.4654 20 18.2671" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkEuro);
export default ForwardRef;