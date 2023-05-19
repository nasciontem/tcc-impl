/**
 * @file Módulo responsável pela exibição do editor de código.
 * @copyright Lucas N. T. Sab 2023
 */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import CodeEditorRefContext from '../../Context/CodeEditorRefContext/CodeEditorRefContext.js';
import Util from '../../../classes/util/Util.js';
import config from '../../../config.json';

function CodeEditorFile(props) {
  const codeEditorRef = useContext(CodeEditorRefContext);
  const [code, setCode] = useState(null);
  const [editor, setEditor] = useState(null);

  useEffect(() => setCode(props.code), [props.code]);

  /**
   * Método responsável por reajustar dimensões do editor ao pôr ou remover tela cheia.
   */
  const resizeEditorCallback = useCallback(resizeEditor, [resizeEditor]);

  function resizeEditor() {
    editor?.layout({});
  }

  useEffect(() => {
    codeEditorRef?.current?.addEventListener('fullscreenchange', resizeEditorCallback);
  }, [codeEditorRef, resizeEditorCallback]);

  function handleComponentDidMount(editor) {
    setEditor(editor);
  }

  return (
    <Editor
      defaultLanguage={config.language}
      value={code?.content}
      theme='vs-dark'
      // Para atualização do arquivo atual é considerado o UID do arquivo recebido ao invés
      // do arquivo já configurado, evitando incongruências entre atualizações por conta de
      // limitações do editor.
      onChange={content => Util.handle(props.onChange, props.code.uid, content)}
      onMount={handleComponentDidMount}
      options={{
        readOnly: code?.disabled,
        minimap: { enabled: props.minimap },
        bracketPairColorization: { enabled: true },
        dropIntoEditor: { enabled: true },
        mouseWheelZoom: true,
        quickSuggestions: {
          comments: 'on',
          other: 'on',
          strings: 'on'
        },
        selectOnLineNumbers: true,
        selectionHighlight: true,
        snippetSuggestions: 'top'
      }}
    />
  );
}

export default CodeEditorFile;