import * as React from 'react';
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>){
  return <textarea {...props} className={'w-full rounded-2xl bg-[#0f0f10] border border-[#262626] px-3 py-2 outline-none focus:ring focus:ring-rose-700/30 ' + (props.className||'')} />;
}
