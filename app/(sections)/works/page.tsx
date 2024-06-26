import { getData } from "@/client";
import Container from "@/components/container/Container";
import React from "react";
import { workDataType } from "@/types";
import WorkCard from "@/components/works/workCard";

const WorksPage = async () => {
  const works = await getData("works");
  return (
    <div className="w-full h-auto">
      <Container>
        <div className="w-full flex flex-row flex-wrap space-y-12">
          {works.map(
            ({
              _id,
              title,
              description,
              language,
              externalLink,
              netlify,
              vercel,
              image,
              git,
            }: workDataType) => {
              return (
                <WorkCard
                  key={_id}
                  title={title}
                  description={description}
                  language={language}
                  externalLink={externalLink}
                  netlify={netlify}
                  vercel={vercel}
                  image={image}
                  git={git}
                />
              );
            }
          )}
        </div>
      </Container>
    </div>
  );
};

export default WorksPage;
