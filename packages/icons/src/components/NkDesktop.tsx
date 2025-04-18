import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkDesktop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="desktop"><path id="Vector" d="M9 20H12M15 20H12M12 20V17M12 17H19C20.1046 17 21 16.1046 21 15V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V15C3 16.1046 3.89543 17 5 17H12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkDesktop);
export default ForwardRef;