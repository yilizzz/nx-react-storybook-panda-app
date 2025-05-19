import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkTrain = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="train"><path id="Vector" d="M16 18H8M16 18L18 21M16 18C17.6569 18 19 16.6569 19 15V11M8 18L6 21M8 18C6.34315 18 5 16.6569 5 15V11M8 14V15M16 14V15M5 11H12M5 11V6M12 11H19M12 11V6M19 11V6M12 6H5M12 6H19M5 6C5 4.34315 6.34315 3 8 3H16C17.6569 3 19 4.34315 19 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkTrain);
export default ForwardRef;