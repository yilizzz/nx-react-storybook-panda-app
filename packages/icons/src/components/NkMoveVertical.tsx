import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkMoveVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="move-vertical"><path id="Vector" d="M8 18L12 22M12 22L16 18M12 22V2M8 6L12 2M12 2L16 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkMoveVertical);
export default ForwardRef;