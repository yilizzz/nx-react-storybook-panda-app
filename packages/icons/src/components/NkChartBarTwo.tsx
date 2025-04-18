import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkChartBarTwo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="chart-bar-two"><path id="Vector" d="M15 9.42857V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V13.2857M15 9.42857V21M15 9.42857H19C20.1046 9.42857 21 10.324 21 11.4286V19C21 20.1046 20.1046 21 19 21H15M15 21H9M9 21V13.2857M9 21H5C3.89543 21 3 20.1046 3 19V15.2857C3 14.1811 3.89543 13.2857 5 13.2857H9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkChartBarTwo);
export default ForwardRef;