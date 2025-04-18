import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkReceptionBell = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="reception-bell"><path id="Vector" d="M3 19H21M12 8V5M12 8H10C7.23858 8 5 10.2386 5 13V16H19V13C19 10.2386 16.7614 8 14 8H12ZM12 5H10M12 5H14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkReceptionBell);
export default ForwardRef;