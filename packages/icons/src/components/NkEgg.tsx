import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkEgg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="egg"><path id="Vector" d="M12 21C16.0041 21 19.25 17.7765 19.25 13.8C19.25 9.82355 16.0041 3 12 3C7.99594 3 4.75 9.82355 4.75 13.8C4.75 17.7765 7.99594 21 12 21Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkEgg);
export default ForwardRef;