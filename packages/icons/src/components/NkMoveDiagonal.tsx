import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkMoveDiagonal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="move-diagonal"><path id="Vector" d="M13 5H19M19 5V11M19 5L5 19M11 19H5M5 19V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkMoveDiagonal);
export default ForwardRef;