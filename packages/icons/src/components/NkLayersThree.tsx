import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkLayersThree = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="layers-three"><path id="Vector" d="M21 12L12 16L3.00001 12M21 16L12 20L3 16M21 8L12 12L3.00001 8L12 4L21 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkLayersThree);
export default ForwardRef;