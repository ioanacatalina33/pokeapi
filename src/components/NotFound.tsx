import React, {FunctionComponent} from "react";
import Content from "./common/Content";
import LoadingContent from "./common/LoadingContent";

//Reusing the LoadingContent with isError to true
const NotFound: FunctionComponent = () => (
  <Content>
    <LoadingContent isError={true} isLoading={false} errorText="Page not found! :(">
      {" "}
    </LoadingContent>
  </Content>
);

export default NotFound;
