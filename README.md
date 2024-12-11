# RTK Query types issue

## Steps to reproduce
1. Run `npm i --force` (use `--force` due to peer dependency issue with TypeScript v5.x.x and `react-scripts@5.0.1`) ([issue](https://github.com/facebook/create-react-app/issues/13682))
2. Make sure in `tsconfig` `"strict": false` and `"incremental": true`
3. Run `npx tsc`. Make sure there are no errors, and that `tsconfig.tsbuildinfo` file is created in the root of the app
4. Run `npm run start`. Make sure the app runs without errors, and then stop the app
5. Rename `Pokemon` type to `Pokemon2` in `pokemon-queries.ts` file
6. Run `npx tsc`. There should be an error:
<img width="991" alt="image" src="https://github.com/user-attachments/assets/62bdc46c-779f-4bb9-a267-586b822f710e">

7. Rename `Pokemon2` type back to `Pokemon`
8. Run `npx tsc`. There should be no errors
9. Run `npm run start`
10. Rename `Pokemon` type to `Pokemon2` in `pokemon-queries.ts` file. There should be an error:
<img width="1107" alt="image" src="https://github.com/user-attachments/assets/550fa5ca-4465-4bec-a00b-b26856bac757">

11. Rename `Pokemon2` type back to `Pokemon`
12. Change `incremental` to `false` in `tsconfig`
13. Run `npm run start`
14. Rename `Pokemon` type to `Pokemon2` in `pokemon-queries.ts` file. There should be the same error as in **Step 10**
15. Rename `Pokemon2` type back to `Pokemon`
16. In `tsconfig`, change `strict` to `true` and `incremental` to `true`. Perform Steps **5** through **14**, but make sure that there are no errors this time
