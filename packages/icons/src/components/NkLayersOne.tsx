import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkLayersOne = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="layers-one"><path id="Vector" d="M12 16L21 12L12 8L3 12L12 16Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkLayersOne);
export default ForwardRef;