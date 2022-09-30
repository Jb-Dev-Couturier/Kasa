import React from 'react';

const TagName = ({ tags }) => {
  return (
    <div className="TagName">
      {tags?.map((tag) => (
        <p key={tag}>
          {tag}
        </p>
      ))}
    </div>
  );
};

export default TagName;
