import { Fragment } from "react";
import useCountries from "../hooks/useCountries";
import useFetch from "../hooks/useFetch";

function Countries({name}) {
  const countries = useCountries(name);

  return (
    <>
      {
        (!countries) ? <>Waiting</> : 
        (
          <>
            {
              countries.map(function(name, index) {
                return <Fragment key={index}>{name}<br /></Fragment>
              })
            }
          </>
        )
      }
    </>
  )
}

export default Countries;