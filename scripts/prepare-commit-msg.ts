import { exec as childProcessExec } from 'child_process';
import fs from 'fs';
import util from 'util';

const cliArguments = process.argv.slice(2);
const [messageFile] = cliArguments;
const branchesToSkip = ['master', 'test', '(no branch)'];

const exec = util.promisify(childProcessExec);

const getCurrentBranch = async (): Promise<string> => {
  const { stderr, stdout: branches } = await exec('git branch');

  if (stderr) {
    throw new Error(stderr);
  }

  const branch =
    branches
      .split('\n')
      .find((branch: string) => branch.trim().charAt(0) === '*') || '';

  return branch.trim().substring(2);
};

const validateBranch = (branchName: string) =>
  !branchesToSkip.includes(branchName);

const editCommitMessage = async (messageFile: string) => {
  const message = fs.readFileSync(messageFile, 'utf8').trim();

  try {
    const branchName = await getCurrentBranch();

    if (!validateBranch(branchName)) {
      return;
    }

    const prefix = branchName.split('_').slice(0, 2);
    const ticket = '[' + prefix[0].toUpperCase() + '-' + prefix[1] + ']';

    if (message.includes(ticket)) {
      return;
    }

    const newMessage = ticket + ' ' + message;

    fs.writeFileSync(messageFile, newMessage);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

if (/COMMIT_EDITMSG/g.test(messageFile)) {
  editCommitMessage(messageFile);
}
