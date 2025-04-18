import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkYen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="yen"><path id="Vector" d="M17.4545 12L12 12M12 12L6.54545 12M12 12L6 3.5M12 12L18 3.5M12 12V16.25M17.4545 16.25H12M12 16.25H6.54545M12 16.25V20.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkYen);
export default ForwardRef;