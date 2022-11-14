npx nest generate resource - an endpoint with all the bells n whistles

CONTROLLER directs requests to the necessary SERVICE

// DTO = data transfer object

https://lucid.app/lucidchart/eaf572b9-41f4-4125-a1ca-95b60062de19/edit?invitationId=inv_502db29f-5935-4b12-8eeb-8d0d6fa0f124&page=0_0#

npx prisma migrate dev --name init (add new table)

https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0#assumed-knowledge

npx prisma db seed

Aims:
Have a db that I maintain, extend and practice with. This DB can be used across tutorials

Tables
User - the user
Instrument - the instruments

User - Instrument, many to one
One user may have many instruments
A instrument may only have one user

InstrumentArchive:

- A reference of international instruments with description, nomenclature, audio, images, video.

CRUD

- USER: Add new user, Auth, Permissions,
- - Create
- - Get Details
- - Update details, permissions
- - Delete

- Instrument
- - CRUD

.. Ideas to extend

Instrument Dictionary
