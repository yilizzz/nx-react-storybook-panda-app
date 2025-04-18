import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkMousePointer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="mouse-pointer"><path id="Vector" d="M12.8661 12.8661L18.4942 10.454C19.4363 10.0502 19.38 8.69609 18.4076 8.37197L5.4691 4.05913C4.59769 3.76866 3.76866 4.59769 4.05913 5.4691L8.37197 18.4076C8.69609 19.38 10.0502 19.4363 10.454 18.4942L12.8661 12.8661ZM12.8661 12.8661L20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkMousePointer);
export default ForwardRef;