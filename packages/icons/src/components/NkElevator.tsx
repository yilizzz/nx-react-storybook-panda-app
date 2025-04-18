import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkElevator = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="elevator"><path id="Vector" d="M12 8.29412H16.5C17.6046 8.29412 18.5 9.18955 18.5 10.2941V19C18.5 20.1046 17.6046 21 16.5 21H12M12 8.29412H7.5C6.39543 8.29412 5.5 9.18955 5.5 10.2941V19C5.5 20.1046 6.39543 21 7.5 21H12M12 8.29412V21M7.125 4.58824L8.75 3L10.375 4.58824M13.625 3L15.25 4.58824L16.875 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkElevator);
export default ForwardRef;