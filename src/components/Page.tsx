import { PropsWithChildren } from "react";

import "./Page.css";


export const Page = ({children} : PropsWithChildren) => {
  return (
    <div className="page">{children}</div>
  )
}

export const Title = ({children} : PropsWithChildren) => {
    return (
      <div className="title">{children}</div>
    )
  }

  export const Body = ({children} : PropsWithChildren) => {
    return (
      <div className="body">{children}</div>
    )
  }
  
  export const Footer = ({children} : PropsWithChildren) => {
    return (
      <div className="footer">{children}</div>
    )
  }
  
  