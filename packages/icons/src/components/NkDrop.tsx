import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkDrop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="drop"><path id="Vector" d="M12.4953 3C16.0755 6.55956 21.8401 10.6022 19.4269 16.3974C18.2753 19.1629 15.4917 21 12.5 21C9.50826 21 6.72461 19.1629 5.57303 16.3974C3.16147 10.6063 8.91956 6.56138 12.4953 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkDrop);
export default ForwardRef;