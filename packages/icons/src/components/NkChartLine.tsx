import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkChartLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="chart-line"><path id="Vector" d="M3 16.5L9 10L13 16L21 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkChartLine);
export default ForwardRef;