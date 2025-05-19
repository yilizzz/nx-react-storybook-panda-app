import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkDollar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="dollar"><path id="Vector" d="M17 5H12M12 5H9.5C7.567 5 6 6.567 6 8.5C6 10.433 7.567 12 9.5 12H12M12 5V3M12 5V12M12 12H14.5C16.433 12 18 13.567 18 15.5C18 17.433 16.433 19 14.5 19H12M12 12V19M12 19H6M12 19V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkDollar);
export default ForwardRef;