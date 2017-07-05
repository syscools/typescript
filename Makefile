main.js: main.ts
	tsc main.ts

clean:
	@$(RM) nspire.js main.js app.component.js 2>/dev/null || true

app.component.js: app.component.ts
	tsc app.component.ts

nspire.js: nspire.ts
	tsc nspire.ts

run: main.js nspire.js app.component.js
	node main.js

.PHONY: clean
