# Tandem
Tandem is a college-based social mobile app for students interested in exploring more parts of their campus. It targets Stanford campus and the Bay Area first by centering on bucket list activities with friends. Tandem blends both intrinsic motivation (doing fun, nostalgic, and meaningful tasks before the end of the quarter) and extrinsic motivation (competing for rewards or bragging rights). In addition, this system supports both collaborative and competitive modes: students can choose to complete challenges with friends or race against them to check off the most items first.

Tandem users will be able to personalize their own bucket list items while still sharing overlaps with others. We want Tandem to encourage agency while enabling social influence to promote activity and exploration that resonates with the users, together or apart.

How this app works/ Backend logic: 
- When a user skips entering an invite code during signup, the app creates a new group in Firestore and generates a unique invite code for that group. This code is stored in the inviteCodes collection, linked to the group’s ID.
- When a user enters an invite code, the app checks the inviteCodes collection in Firestore: if the code exists, the user is added to the corresponding group’s members array in the groups collection; if the code does not exist or is expired, the app shows an error.


Under design till May 23 2025: https://www.figma.com/design/rt0gEEW3a0dtWleSUUn796/Tandem--UI?node-id=0-1&t=G7WktxHOkXiFKwqz-1
This is a preliminary mock-up of the app, designed on Figma, for visual reference:

![sign-up page, 1](https://github.com/user-attachments/assets/695e06b9-ba14-4ffe-a059-a179a6019984)
![page 0](https://github.com/user-attachments/assets/de706875-d5dd-4d88-98a7-fa5466f1cd2e)
![splash screen](https://github.com/user-attachments/assets/d0a35c5e-c1b9-44b6-a057-1e52f2fc1ef1)
![profile](https://github.com/user-attachments/assets/3a06504e-f29d-4d68-9a96-bd53c61b772a)
![friend group](https://github.com/user-attachments/assets/5953c9af-23d2-4b12-aadf-d57ff62f1bdb)




