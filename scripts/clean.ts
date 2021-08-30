import fs from 'fs';

const {
  promises: { rmdir }
} = fs;

const { cwd } = process;

const dir = `${cwd()}/dist`;

const removeDistDirectory = async () => {
  try {
    await rmdir(dir, { recursive: true });
  } catch (error) {
    console.error(error);
  }
};

removeDistDirectory();
