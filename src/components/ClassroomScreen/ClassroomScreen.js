import React, { useContext } from 'react';
import ClassroomCreative from '../ClassroomCreative/ClassroomCreative';
import ClassroomMain from '../ClassroomMain/ClassroomMain';
import ClassroomPractice from '../ClassroomPractice/ClassroomPractice';
import { ContentContext } from '../ContentContext/ContentContext';

function ClassroomScreen(props) {
  const [content,] = useContext(ContentContext);

  function getCurrentContent() {
    if (typeof content !== 'object') { return null; }

    return content.screen === 'main' ? <ClassroomMain subject={props.subject?.data?.attributes} questions={props.questions} /> :
      content.screen === 'practice' ? <ClassroomPractice /> :
        content.screen === 'creative' ? <ClassroomCreative /> :
          null;
  }

  return (<div>{getCurrentContent()}</div>);
}

export default ClassroomScreen;