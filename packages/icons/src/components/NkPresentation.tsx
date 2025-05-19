import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkPresentation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="presentation"><path id="Vector" d="M3 4H21M19.1 4V13.7778C19.1 14.2493 18.9104 14.7015 18.5728 15.0349C18.2352 15.3683 17.7774 15.5556 17.3 15.5556H6.7C6.22261 15.5556 5.76477 15.3683 5.42721 15.0349C5.08964 14.7015 4.9 14.2493 4.9 13.7778V4M7.5 20L12 15.5556L16.5 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkPresentation);
export default ForwardRef;