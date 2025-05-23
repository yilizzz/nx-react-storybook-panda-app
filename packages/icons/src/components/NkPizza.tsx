import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkPizza = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="pizza"><path id="Vector" d="M6.23394 16.9248C6.99498 14.3988 8.36958 12.1005 10.235 10.235C12.1005 8.36958 14.3988 6.99498 16.9248 6.23394M7.58072 7.58072C9.6425 5.51893 12.1531 3.9696 14.9104 3.05025C15.4472 2.87128 16.0137 3.18733 16.1763 3.72926L20.9546 19.6572C21.1931 20.452 20.452 21.1931 19.6572 20.9546L3.72926 16.1763C3.18733 16.0137 2.87128 15.4472 3.05025 14.9104C3.9696 12.1531 5.51893 9.6425 7.58072 7.58072Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M11 15L11.3536 15.3536" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_3" d="M15 11L15.3536 11.3536" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_4" d="M16 16L16.3536 16.3536" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkPizza);
export default ForwardRef;