import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkMoveHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="move-horizontal"><path id="Vector" d="M18 8L22 12M22 12L18 16M22 12H2M6 8L2 12M2 12L6 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkMoveHorizontal);
export default ForwardRef;