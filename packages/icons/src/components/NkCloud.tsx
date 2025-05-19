import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkCloud = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="cloud"><path id="Vector" d="M20.2778 17.497C23.9561 14.3426 20.064 10.1132 16.0223 10.1132C13.1753 -0.969193 -3.5256 8.19719 3.8752 16.5505" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkCloud);
export default ForwardRef;