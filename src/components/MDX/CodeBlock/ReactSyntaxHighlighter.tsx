import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { Clipboard, ClipboardCheck } from 'components/Icon';

interface PageProps {
  className?: string;
  value: React.ReactNode;
}

export default function ReactCodeBlock({
  className = 'language-txt',
  value,
}: PageProps) {
  const [, language] = className.split('-');
  const [copied, setCopied] = useState(false);

  const IconComponent = copied ? ClipboardCheck : Clipboard;

  async function handleCopyToClipboard() {
    await navigator.clipboard.writeText(value?.toString() ?? '');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <div className="h-full w-full text-sm">
      <div className="bordered flex w-full items-center justify-between rounded rounded-b-none border border-b-0 border-gray-200 py-2 pr-2 dark:border-gray-600 dark:bg-gray-600 dark:text-white">
        <div className="ml-4 font-semibold">{language}</div>
        <div
          className="flex items-center font-bold hover:cursor-pointer"
          onClick={handleCopyToClipboard}>
          <div className="mr-2">{copied ? 'Copied' : 'Copy'}</div>
          <div className="h-5 w-5">
            <IconComponent />
          </div>
        </div>
      </div>
      <div className="shadow-xl">
        <SyntaxHighlighter
          language={language}
          customStyle={{
            padding: '20px',
            paddingRight: '30px',
            borderRadius: '0 0 4px 4px',
          }}
          style={atomOneDark}>
          {value}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
