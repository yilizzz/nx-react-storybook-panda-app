import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="plus"><path id="Vector" d="M18 12L12 12M12 12L6 12.0001M12 12L12 6M12 12L12 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkPlus);
export default ForwardRef;