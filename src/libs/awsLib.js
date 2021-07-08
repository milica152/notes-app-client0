import { Storage } from "aws-amplify";
import config from '../config';

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
}

export async function s3UploadPicture(file) {
  const filename = `${Date.now()}-${file.name}`;
  
  Storage.configure({ AWSS3: {
    bucket: 'notes-app-profile-picture-upload',
    region: "eu-west-1",
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  }});

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
}