import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkCloudLightning = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="cloud-lightning"><path id="Vector" d="M19.825 17C24.3196 13.8394 20.3002 9.27044 16.1195 9.27044C13.2963 -1.73233 -3.26491 7.36819 4.07399 15.6614" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M11.501 11L9 16.0006H14.002L11.5 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkCloudLightning);
export default ForwardRef;