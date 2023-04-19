# Crack the code app test

## Stack

- Frontend
  - [Next.js](https://nextjs.org/)
  - [Styled-components](https://styled-components.com/)
  - [Jest](https://jestjs.io/)

## Highlights

- Clean architecture
- Clean code
- Atomic design
- Unit testing
- Gitflow
- Custom labels in repository
- Follow guidelines

## Requeriments
Mandatory

- Node >= 14.7.3

## Local configuration
If you wish run the project, then:

1. yarn install
2. yarn dev
3. go to `http://localhost:3000/`
4. see the magic

If you wish run the test, then:

1. yarn test

If you wish run the test with coverage, then:

1. yarn test:coverage

## Folder structure
Explanation of hierarchies in files and layers.

    crack-the-code-app-test/
      ├── public/                          # Favicon, fonts, svg, robots folder
      |   ├── fonts/                       # Fonts folder
      │   └── icons/                       # Icons folder
      └── src/                             # Application folder
          ├── components/                  # Components folder (Atomic design strategy)
          ├── constants/                   # General constants folder
          ├── mixins/                      # Mixins folder
          ├── pages/                       # Pages folder
          └── styles/                      # Styles folder
              ├── core/                    # Breakpoints, colors, utils folder
              └── thems/                   # Themes folder
            

## Branches

- `main` >>> All features
- `feature/initial-configurations` >>> initial configurations.
- `feature/markup-page` >>> markup page and unit test.
- `enhancement/readme` >>> markup page and unit test.

## Other details

- Layout
    -  https://drive.google.com/file/d/1o5d1PgaMnCTLtr3moPeK0dQvrckZg7NF/view?usp=sharing
- Lightouse
    -  https://drive.google.com/file/d/1oJ3hQ4pUElvcDU3agzmQUdGYs0MQ-bh_/view?usp=sharing

# License

MIT
