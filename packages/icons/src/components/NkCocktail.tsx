import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkCocktail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="cocktail"><path id="Vector" d="M12 14.25L19.7768 4.62469C20.3058 3.96993 19.835 3 18.9882 3H5.01184C4.165 3 3.69419 3.96993 4.22321 4.62469L12 14.25ZM12 14.25V21M6.54632 7.5H17.4537M7.32902 21H16.671" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkCocktail);
export default ForwardRef;